import { connect } from "@/config/dbConfig";
import DestinationModel from "@/models/destinationModel";
import { errorResponse, successResponse } from "@/service.config";

export async function GET(request, context) {
  try {
    await connect();

    const countryId = context.params.id;

    const count = await DestinationModel.find({ countryId: countryId }).count();

    return successResponse("Destinations count fetched successfully", 200, {
      count: count || 0,
    });
  } catch (error) {
    return errorResponse(error.message, error.status);
  }
}
