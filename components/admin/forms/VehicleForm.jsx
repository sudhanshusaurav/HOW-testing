import ImageInput from "@/components/inputs/ImageInput";
import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import { AddVehicle } from "@/services/vehicleService";
import InputLabel from "@/components/inputs/InputLabel";
import dynamic from "next/dynamic";
const EditorInput = dynamic(() => import("@/components/inputs/EditorInput"), {
  ssr: false,
});

function VehicleForm({ onSuccess }) {
  const addVehicle = (values, setSubmitting, resetForm) => {
    AddVehicle(values)
      .then((res) => {
        toast.success(res.data.message);
        onSuccess(res.data.data);
        resetForm({});
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setSubmitting(false);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          type: "",
          seats: "",
          highlights: "",
          description: "",
          image: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addVehicle(values, setSubmitting, resetForm);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   // setSubmitting(false);
          // }, 400);
        }}
      >
        {({
          values,
          setFieldValue,
          //   handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="my-2 gap-4">
              <div className="grow">
                <div className="my-4 flex flex-wrap">
                  <div className="basis-1/2 px-2">
                    <InputLabel required={true}>Vehicle Type</InputLabel>
                    <Field className="form-input" name="type" />
                  </div>
                  <div className="basis-1/2 px-2">
                    <InputLabel>Available Seats</InputLabel>
                    {/* <label htmlFor="" className="font-semibold">
                      Available Seats{" "}
                      <span className="text-xs font-semibold text-gray-400">
                        (Except Driver)
                      </span>
                    </label> */}
                    <div className="flex gap-1">
                      <Field
                        className="form-input"
                        name="seats"
                        type="number"
                        min="1"
                      />
                      <ErrorMessage name="name">
                        {(msg) => <div className="error-msg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>

                <div className="my-4 px-2">
                  <label htmlFor="" className="font-semibold">
                    Overview
                  </label>
                  <EditorInput
                    value={values.overview}
                    onChange={(value) => setFieldValue(`overview`, value)}
                  />
                  <ErrorMessage name="overview">
                    {(msg) => <div className="error-msg">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="my-4 px-2">
                  <label htmlFor="" className="font-semibold">
                    Vehicle Image
                  </label>
                  <ImageInput
                    image={values.image}
                    allowedFiles={1}
                    onUploadSuccess={(files) =>
                      setFieldValue("image", files[0])
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="btn btn-primary text-center"
                disabled={isSubmitting}
              >
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default VehicleForm;
