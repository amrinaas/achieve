import React from "react";

const Badge = ({ status }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-800";
            case "in_progress":
                return "bg-yellow-100 text-yellow-800";
            case "pending":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const formatStatus = (status) => {
        switch (status) {
            case "completed":
                return "Completed";
            case "in_progress":
                return "In Progress";
            case "pending":
                return "Pending";
            default:
                return (
                    status.charAt(0).toUpperCase() +
                    status.slice(1).replace(/_/g, " ")
                );
        }
    };

    return (
        <span
            className={`font-medium text-xs inline-flex items-center rounded-full px-2 py-1 ${getStatusColor(
                status
            )}`}
        >
            {formatStatus(status)}
        </span>
    );
};

export default Badge;
