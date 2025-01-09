import React from "react";
import Badge from "./Badge";

const Table = ({ items, header, handleRowClick }) => {
    let itemsPerPage = items.meta.per_page;
    let currentPage = items.meta.current_page;

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100 text-sm text-gray-700">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 font-extrabold">
                            No
                        </th>
                        {header.map((col, i) => (
                            <th
                                key={i}
                                className="border border-gray-300 px-4 py-2"
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.data.map((item, index) => (
                        <tr
                            key={item.id}
                            className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer text-sm"
                            onClick={() => handleRowClick(item)}
                        >
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                {(currentPage - 1) * itemsPerPage + index + 1}{" "}
                            </td>
                            {header.map((col, i) => {
                                return (
                                    <td
                                        key={i}
                                        className="border border-gray-300 px-4 py-2"
                                    >
                                        {col.key === "status" ? (
                                            <Badge status={item.status} />
                                        ) : (
                                            col.key
                                                .split(".")
                                                .reduce(
                                                    (acc, curr) => acc[curr],
                                                    item
                                                )
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
