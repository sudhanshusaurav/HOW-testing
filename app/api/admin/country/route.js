import { connect } from "@/config/dbConfig";
import CountryModel from "@/models/countryModel";
import { errorResponse, successResponse } from "@/service.config";
import decodeToken from "@/utils/decodeToken";

export async function GET(request) {
  try {
    await connect();
    const countries = await CountryModel.find().sort({ createdAt: -1 });

    return successResponse("Countries fetched successfully", 200, countries);
  } catch (err) {
    return errorResponse(err.message, err.status);
  }
}

export async function POST(request) {
  try {
    await connect();
    const loggedinUser = await decodeToken(request.cookies.get("token").value);

    const reqBody = await request.json();

    reqBody.createdBy = loggedinUser._id;
    reqBody.createdAt = new Date();

    const newCountry = await CountryModel.create(reqBody);

    return successResponse("Country created successfully", 201, newCountry);
  } catch (err) {
    return errorResponse(err.message, err.status);
  }
}

export async function PUT(request) {
  try {
    await connect();
    const loggedinUser = await decodeToken(request.cookies.get("token").value);

    const reqBody = await request.json();
    reqBody.updatedBy = loggedinUser._id;
    reqBody.updatedAt = new Date();

    const { _id } = reqBody;

    if (!_id) {
      return errorResponse("ID is required to update the Country", 400);
    }

    delete reqBody.slug;

    const updatedCountry = await CountryModel.findByIdAndUpdate(_id, reqBody, {
      new: true,
      runValidators: true,
    });

    if (!updatedCountry) {
      return errorResponse("Country not found", 404);
    }

    return successResponse("Country updated successfully", 200, updatedCountry);
  } catch (error) {
    return errorResponse(error.message, error.status || 500);
  }
}

export async function DELETE(request) {
  try {
    await connect();
    const _id = request.nextUrl.searchParams.get("_id") || "";

    if (!_id) {
      return errorResponse("ID must be provided", 400);
    }

    const deletedCountry = await CountryModel.findByIdAndDelete(_id);

    if (!deletedCountry) {
      return errorResponse("Country not found", 404);
    }

    return successResponse("Country deleted successfully", 200, deletedCountry);
  } catch (error) {
    return errorResponse(error.message, error.status || 500);
  }
}
