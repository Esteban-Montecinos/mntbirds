'use client'
import { Pagination } from "@nextui-org/react";
import { useState } from "react";

export default function FooterPagination() {
    const [currentPage, setCurrentPage] = useState(1)
  return (
    <Pagination
        total={10}
        color="success"
        page={currentPage}
        onChange={setCurrentPage}
      />
  )
}

