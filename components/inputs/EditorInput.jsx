import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function EditorInput({ value, onChange, onBlur, saveBtn }) {
  return (
    <div className="w-full">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        // config={{
        //   toolbar: [
        //     "heading",
        //     "|",
        //     "bold",
        //     "italic",
        //     "link",
        //     // "uploadImage",
        //     "bulletedList",
        //     "numberedList",
        //     "|",
        //     "blockQuote",
        //     "undo",
        //     "redo",
        //     "|",
        //     "insertTable",
        //     "tableColumn",
        //     "tableRow",
        //     "mergeTableCells", // table utilities
        //   ],
        //   table: {
        //     contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        //   },
        //   // extraPlugins: [MyCustomUploadAdapterPlugin],

        //   // image: {
        //   //   toolbar: [
        //   //     "imageTextAlternative",
        //   //     "|",
        //   //     "imageStyle:full",
        //   //     "imageStyle:side",
        //   //   ],
        //   //   styles: ["full", "side"],
        //   //   resizeUnit: "px",
        //   // },
        // }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
      {saveBtn && (
        <div className="mt-2 text-right">
          <button onClick={onBlur} className="text-p-sm text-secondary">
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default EditorInput;
