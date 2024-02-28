"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useUploadThing } from "@/utils/uploadthing";

const baseStyle = {
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function ImageInput({ images, allowedFiles, onUploadSuccess }) {
  const [files, setFiles] = useState([]);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (urls) => {
      onUploadSuccess(urls);
      alert("uploaded successfully!");
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
  });

  useEffect(() => {
    if (images?.length > 0) {
      setFiles(images);
    }
  }, [images]);

  const {
    getRootProps,
    acceptedFiles,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: allowedFiles,
    onDrop: (acceptedFiles) => {
      // uploadFiles(acceptedFiles);
      startUpload(acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const thumbs = files?.map((file) => (
    <div
      className={`mb-2 mr-2 inline-flex rounded-sm border p-1 ${
        allowedFiles === 1 ? "h-full w-full" : "h-[100px] w-[100px]"
      }`}
      key={file.name}
    >
      <div
        className={`flex overflow-hidden ${
          allowedFiles === 1 ? "h-full w-full" : ""
        }`}
      >
        <img
          src={file.preview || file.fileUrl}
          className={`block h-full rounded-sm ${
            allowedFiles === 1 ? "mx-auto" : "w-auto"
          }`}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="uploaded-image"
        />
      </div>
    </div>
  ));

  return (
    <div className="grow">
      <div {...getRootProps({ style })}>
        <div className="flex h-full w-full items-center">
          <input {...getInputProps()} />
          {files.length === 0 && (
            <p className="mx-auto text-center">
              Drag n drop some files here, or click to select files
            </p>
          )}

          {files.length > 0 && (
            <aside
              className={`"flex flex-wrap ${
                allowedFiles === 1 ? "h-full w-full" : ""
              }`}
            >
              {thumbs}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageInput;
