import { connect } from "@/config/dbConfig";
import Pkg from "@/models/packageModel";
import { errorResponse, successResponse } from "@/service.config";

export async function GET(request, context) {
  try {
    await connect();

    const countryId = context.params.id;

    const count = await Pkg.find({ countryId: countryId }).count();

    return successResponse("Package count fetched successfully", 200, {
      count: count || 0,
    });
  } catch (error) {
    return errorResponse(err.message, err.status);
  }
}
