"use client";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect, useState, Fragment } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import HeadingMedium from "@/components/typos/HeadingMedium";
import CategoryForm from "@/app/admin/(private)/categories/CategoryForm";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "@/store/categorySlice";
import IconPlus from "@/components/Icon/IconPlus";

function CategorySelectInput({
  creatable,
  onChange,
  onBlur,
  value,
  isDisabled,
}) {
  const dispatch = useDispatch();

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const categories = useSelector((state) => state.categories.categories);

  const handleNewCategory = (category) => {
    dispatch(updateCategory(category));
  };

  // useEffect(() => {
  //   GetAllCategories()
  //     .then((res) => {
  //       setCategories(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="flex gap-1">
        <Select
          isMulti={true}
          isDisabled={isDisabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value?.map((v) => ({
            value: v,
            label: categories.find((category) => category._id === v)?.name,
          }))}
          options={categories?.map((category) => ({
            label: category.name,
            value: category._id,
          }))}
          className="w-full"
        />

        {creatable && (
          <button
            type="button"
            onClick={() => setIsFormModalOpen(true)}
            className="block h-auto rounded-md border border-gray-300 bg-white px-2"
          >
            <IconPlus />
          </button>
        )}
      </div>

      <Transition appear show={isFormModalOpen} as={Fragment}>
        <Dialog
          as="div"
          open={isFormModalOpen}
          onClose={() => setModal5(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>
          <div className="fixed inset-0 z-[999] bg-[black]/60">
            <div className="flex min-h-screen items-start justify-center px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="panel my-8 w-full max-w-7xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                  <CategoryForm
                    onSuccess={handleNewCategory}
                    closeModal={() => setIsFormModalOpen(false)}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CategorySelectInput;
