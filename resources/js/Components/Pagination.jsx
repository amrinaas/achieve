import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
    return (
        <nav className="text-center p-4">
            {links.map((link, index) => (
                <span key={index} className="p-2">
                    <Link
                        preserveScroll
                        href={link.url}
                        className={`text-blue-500 hover:text-blue-800 ${
                            link.active ? "text-black font-bold" : ""
                        } ${
                            !link.url
                                ? "pointer-events-none text-blue-900"
                                : "hover:bg-gray-950"
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link>
                </span>
            ))}
        </nav>
    );
};

export default Pagination;
