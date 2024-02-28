import { connect } from "@/config/dbConfig";
import CountryModel from "@/models/countryModel";
import { errorResponse, successResponse } from "@/service.config";

export async function GET(request, context) {
  try {
    await connect();

    const _id = context.params.id;

    const country = await CountryModel.findOne({ _id: _id });

    return successResponse("Country fetched successfully", 200, country);
  } catch (err) {
    return errorResponse(err.message, err.status);
  }
}
