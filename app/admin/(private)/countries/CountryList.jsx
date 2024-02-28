"use client";

import Dropdown from "@/components/Dropdown";
import IconCaretDown from "@/components/Icon/IconCaretDown";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sortBy from "lodash/sortBy";

import IconPlus from "@/components/Icon/IconPlus";
import IconEdit from "@/components/Icon/IconEdit";
import Link from "next/link";
import Image from "next/image";

function CountryList({ countries, heading }) {
  const [hideCols, setHideCols] = useState(["_id", "slug", "description"]);
  const [search, setSearch] = useState("");
  const [rowData, setRowData] = useState(countries);
  const [initialRecords, setInitialRecords] = useState(sortBy(rowData, "name"));
  const [recordsData, setRecordsData] = useState(countries);
  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 30, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [sortStatus, setSortStatus] = useState({
    columnAccessor: "id",
    direction: "asc",
  });

  const cols = [
    { accessor: "_id", title: "ID" },
    { accessor: "images", title: "Image" },
    { accessor: "title", title: "Title" },
    { accessor: "countryId", title: "Country" },
    { accessor: "slug", title: "Slug" },
    { accessor: "totalNights", title: "Duration" },
    { accessor: "startingLocation", title: "Start-End" },
    { accessor: "price", title: "Price" },
  ];

  useEffect(() => {
    setRowData(countries);
    setRecordsData(countries);
  }, [countries]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const data = sortBy(initialRecords, sortStatus.columnAccessor);
    setInitialRecords(sortStatus.direction === "desc" ? data.reverse() : data);
    setPage(1);
  }, [sortStatus]);

  useEffect(() => {
    setInitialRecords(() => {
      return rowData?.filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.slug.toLowerCase().includes(search.toLowerCase()) ||
          item.countryCode.toLowerCase().includes(search.toLowerCase())
        );
      });
    });
  }, [search]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...initialRecords?.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  const showHideColumns = (col, value) => {
    if (hideCols.includes(col)) {
      setHideCols((col) => hideCols.filter((d) => d !== col));
    } else {
      setHideCols([...hideCols, col]);
    }
  };

  return (
    <div className="panel">
      <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
        <h5 className="text-lg font-semibold dark:text-white-light">
          {heading} Countries
        </h5>
        <div className="flex items-center gap-5 ltr:ml-auto rtl:mr-auto">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="dropdown">
              <Dropdown
                btnClassName="!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark"
                button={
                  <>
                    <span className="ltr:mr-1 rtl:ml-1">Columns</span>
                    <IconCaretDown className="h-5 w-5" />
                  </>
                }
              >
                <ul className="!min-w-[160px]">
                  {cols.map((col, i) => {
                    return (
                      <li
                        key={i}
                        className="flex flex-col"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <div className="flex items-center px-4 py-1">
                          <label className="mb-0 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={!hideCols.includes(col.accessor)}
                              className="form-checkbox"
                              defaultValue={col.accessor}
                              onChange={(event) => {
                                setHideCols(event.target.value);
                                showHideColumns(
                                  col.accessor,
                                  event.target.checked
                                );
                              }}
                            />
                            <span className="whitespace-nowrap ltr:ml-2 rtl:mr-2">
                              {col.title}
                            </span>
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Dropdown>
            </div>
          </div>
          <div className="text-right">
            <input
              type="text"
              className="form-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Link
            href={`/admin/countries/add`}
            className="btn btn-outline-primary"
          >
            <IconPlus /> New
          </Link>
        </div>
      </div>
      <div className="datatables">
        <DataTable
          className="table-hover whitespace-nowrap"
          records={recordsData}
          columns={[
            {
              accessor: "_id",
              title: "ID",
              sortable: true,
              hidden: hideCols.includes("_id"),
            },
            {
              accessor: "images",
              title: "Image",
              render: ({ images }) => (
                <div className="flex items-center gap-2">
                  <Image
                    src={images?.[0]?.fileUrl}
                    className=" h-auto w-20 rounded-[.5rem]"
                    width={80}
                    height={50}
                    alt=""
                  />
                </div>
              ),
            },
            {
              accessor: "name",
              title: "Name",
              sortable: true,
              hidden: hideCols.includes("name"),
            },

            {
              accessor: "slug",
              title: "Slug",
              sortable: true,
              hidden: hideCols.includes("slug"),
            },
            {
              accessor: "isdCode",
              title: "ISD Code",
              sortable: true,
              hidden: hideCols.includes("isdCode"),
            },
            {
              accessor: "countryCode",
              title: "Country Code",
              sortable: true,
              hidden: hideCols.includes("countryCode"),
            },
            {
              accessor: "description",
              title: "Description",
              sortable: true,
              hidden: hideCols.includes("description"),
            },

            {
              accessor: "actions",
              title: "Actions",
              render: (data) => (
                <div className={`flex items-center gap-4`}>
                  <Link
                    href={`/admin/countries/update/${data._id}`}
                    className="text-success"
                  >
                    <IconEdit />
                  </Link>
                </div>
              ),
            },
          ]}
          highlightOnHover
          totalRecords={initialRecords?.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          minHeight={200}
          paginationText={({ from, to, totalRecords }) =>
            `Showing  ${from} to ${to} of ${totalRecords} entries`
          }
        />
      </div>
    </div>
  );
}

export default CountryList;
