"use client";

import { useRouter, notFound } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();
  return <div onClick={router.back} className="modal-backdrop" />;
}
