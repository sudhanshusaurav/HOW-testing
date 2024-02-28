"use client";

import Modal from "@/components/common/Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UpdateCountryForm from "@/app/admin/(private)/countries/update/[id]/UpdateCountryForm";

function Page() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(true);

  const onClose = () => {
    router.back();
    setModalOpen(false);
  };

  return (
    <Modal open={modalOpen} onClose={onClose}>
      <UpdateCountryForm />
    </Modal>
  );
}

export default Page;
