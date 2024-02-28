import { useEffect, useState } from "react";
import IconEdit from "../Icon/IconEdit";
import IconTrash from "../Icon/IconTrash";
import InputLabel from "../inputs/InputLabel";
import dynamic from "next/dynamic";
const EditorInput = dynamic(() => import("@/components/inputs/EditorInput"), {
  ssr: false,
});

function ReadableFaqContainer({
  index,
  data,
  removeIndex,
  removeData,
  saveData,
  apiResponse,
}) {
  const [editable, setEditable] = useState(false);
  const [faq, setFaq] = useState();

  useEffect(() => {
    setFaq(data);
    if (!data.question || !data.answer) {
      setEditable(true);
    }
  }, [data]);

  useEffect(() => {
    if (apiResponse === "success" && data.question && data.answer)
      setEditable(false);
  }, [apiResponse]);

  return (
    <div className="w-full">
      {!editable && (
        <div className="group flex items-start gap-4">
          <p className="font-semibold">{index + 1}.</p>
          <div className="flex grow flex-col gap-2">
            <div className="item-start flex gap-4">
              <h6
                onClick={() => setEditable(true)}
                className="grow font-medium"
              >
                {faq?.question}
              </h6>
              {!editable && (
                <div className="invisible flex items-center gap-2 group-hover:visible">
                  <button
                    type="button"
                    onClick={() => setEditable(true)}
                    className="text-secondary"
                  >
                    <IconEdit />
                  </button>
                  <button
                    onClick={removeData}
                    type="button"
                    className="text-red-500"
                  >
                    <IconTrash />
                  </button>
                </div>
              )}
            </div>
            <div
              className="text-p-sm text-gray-500"
              onClick={() => setEditable(true)}
              dangerouslySetInnerHTML={{ __html: faq?.answer }}
            ></div>
          </div>
        </div>
      )}

      {editable && (
        <div className="flex items-start gap-4">
          <p className="font-semibold">{index + 1}.</p>
          <div className="flex grow flex-col gap-4">
            <div className="w-full">
              <InputLabel>Question</InputLabel>
              <input
                type="text"
                name=""
                id=""
                className="form-input"
                value={faq?.question}
                onChange={(e) =>
                  setFaq((faq) => ({
                    question: e.target.value,
                    answer: faq.answer,
                  }))
                }
              />
            </div>

            <div className="w-full">
              <InputLabel>Answer</InputLabel>
              <EditorInput
                value={faq?.answer}
                onChange={(data) =>
                  setFaq((faq) => ({
                    question: faq.question,
                    answer: data,
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-end gap-6">
              <button
                type="button"
                onClick={faq?._id ? removeData : removeIndex}
                className="text-red-500"
              >
                Delete
              </button>
              <button
                onClick={() => saveData(faq)}
                type="button"
                className="text-secondary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReadableFaqContainer;
