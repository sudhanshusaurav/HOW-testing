"use client";

import Modal from "@/components/common/Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AddCountryForm from "../../../countries/add/AddCountryForm";

function Page() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(true);

  const onClose = () => {
    router.back();
    setModalOpen(false);
  };

  return (
    <Modal open={modalOpen} onClose={onClose}>
      <AddCountryForm />
    </Modal>
  );
}

export default Page;
