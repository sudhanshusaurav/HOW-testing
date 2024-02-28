"use client";

import ImageInput from "@/components/inputs/ImageInput";
import { FieldArray, Formik } from "formik";
import ReadableInputText from "@/components/readableInput/ReadableInputText";
import ReadableInputTextarea from "@/components/readableInput/ReadableInputTextarea";
import ReadableInputEditor from "@/components/readableInput/ReadableInputEditor";
import Image from "next/image";
import ReadableFaqContainer from "@/components/readableInput/ReadableFaqContainer";
import IconPlus from "@/components/Icon/IconPlus";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryStatus, resetCountryStatus } from "@/store/countrySlice";
import Switch from "@/components/inputs/Switch";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  slug: Yup.string().required(),
  countryCode: Yup.string().required(),
  isdCode: Yup.string().required(),
});

function CountryForm({ formData, onSubmit }) {
  const dispatch = useDispatch();

  const status = useSelector(fetchCountryStatus);

  return (
    <div className="lg:p-5">
      <Formik
        enableReinitialize
        initialValues={{
          images: formData?.images || [],
          active: formData?.active === false ? false : true,
          name: formData?.name || "",
          slug: formData?.slug || "",
          countryCode: formData?.countryCode || "",
          isdCode: formData?.isdCode || "",
          overview: formData?.overview || "",
          faqs: formData?.faqs || [],
          metaTitle: formData?.metaTitle || "",
          metaDescription: formData?.metaDescription || "",
          metaKeywords: formData?.metaKeywords || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(resetCountryStatus());
          onSubmit(values);
        }}
      >
        {({ values, errors, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid h-[75vh] grid-cols-1 overflow-auto lg:grid-cols-4">
              <div className="col-span-1 flex flex-col gap-4 p-4 lg:max-h-full lg:overflow-auto">
                <p className="font-bold">Images</p>
                <hr />
                <div className="flex flex-col gap-4">
                  <div>
                    <ImageInput
                      onUploadSuccess={(files) =>
                        setFieldValue("images", files)
                      }
                      allowedFiles={10}
                      // images={values.images}
                    />
                    <div className="text-right">
                      <button
                        onClick={handleSubmit}
                        className="text-p-sm font-medium text-secondary"
                      >
                        Save Images
                      </button>
                    </div>
                  </div>
                  <hr />
                  {values?.images?.map((img, index) => (
                    <Image
                      key={index}
                      src={img?.fileUrl}
                      width={400}
                      alt=""
                      height={300}
                      className="h-auto w-full"
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-4 p-4 lg:max-h-full lg:overflow-auto">
                <div className="flex items-center justify-between">
                  <p className="font-bold">{values.name} Info</p>
                  <Switch
                    checked={values.active}
                    onChange={(value) => {
                      setFieldValue("active", value);
                      handleSubmit();
                    }}
                  />
                </div>
                <hr />
                <ReadableInputText
                  label="Name"
                  required={true}
                  value={values.name}
                  onChange={(value) => {
                    setFieldValue("name", value);
                    setFieldValue(
                      "slug",
                      value.replace(/[\/\s]/g, "-").toLowerCase()
                    );
                  }}
                  onBlur={handleSubmit}
                  error={errors.name}
                  apiResponse={status}
                />
                <ReadableInputText
                  label="Slug"
                  required={true}
                  disabled={true}
                  value={values.slug}
                  error={errors.slug}
                  apiResponse={status}
                />
                <div className="grid grid-cols-2 gap-4">
                  <ReadableInputText
                    label="Country Short Code"
                    required={true}
                    value={values.countryCode}
                    onChange={(value) => setFieldValue("countryCode", value)}
                    onBlur={handleSubmit}
                    error={errors.countryCode}
                    apiResponse={status}
                  />

                  <ReadableInputText
                    label="ISD Code"
                    required={true}
                    value={values.isdCode}
                    onChange={(value) => setFieldValue("isdCode", value)}
                    onBlur={handleSubmit}
                    error={errors.isdCode}
                    placeholder="+91"
                    apiResponse={status}
                  />
                </div>

                <ReadableInputEditor
                  label="Overview"
                  value={values.overview}
                  onChange={(value) => setFieldValue("overview", value)}
                  onBlur={handleSubmit}
                  apiResponse={status}
                  saveBtn={true}
                />

                <div className="mt-4">
                  <p className="mb-2 font-bold">FAQS</p>
                  <FieldArray
                    name="faqs"
                    render={(arrayHelpers) => (
                      <div>
                        {values.faqs &&
                          values.faqs.length > 0 &&
                          values.faqs.map((faq, index) => (
                            <div key={index}>
                              <hr />
                              <div className="w-full py-4">
                                <ReadableFaqContainer
                                  index={index}
                                  data={faq}
                                  saveData={(data) => {
                                    setFieldValue(`faqs[${index}]`, data);
                                    handleSubmit();
                                  }}
                                  removeIndex={() => arrayHelpers.remove(index)}
                                  removeData={() => {
                                    arrayHelpers.remove(index);
                                    handleSubmit();
                                  }}
                                  apiResponse={status}
                                />
                              </div>
                            </div>
                          ))}
                        <button
                          type="button"
                          onClick={() => arrayHelpers.push({})}
                          className="inline-flex gap-1 text-p-sm text-secondary"
                        >
                          <IconPlus /> FAQ
                        </button>
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1 flex flex-col gap-4 p-4 lg:max-h-full lg:overflow-auto">
                <p className="font-bold">Meta Info</p>
                <hr />
                <ReadableInputText
                  label="Meta Title"
                  value={values.metaTitle}
                  onChange={(value) => setFieldValue("metaTitle", value)}
                  onBlur={handleSubmit}
                  apiResponse={status}
                />
                <ReadableInputTextarea
                  label="Meta Description"
                  value={values.metaDescription}
                  onChange={(value) => setFieldValue("metaDescription", value)}
                  onBlur={handleSubmit}
                  apiResponse={status}
                />
                <ReadableInputTextarea
                  label="Meta Keywords"
                  value={values.metaKeywords}
                  onChange={(value) => setFieldValue("metaKeywords", value)}
                  onBlur={handleSubmit}
                  apiResponse={status}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default CountryForm;
