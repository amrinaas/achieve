import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const user = usePage().props.auth.user;

    const formatDate = (date) => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
        };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
            date
        );

        return formattedDate.replace(/, (\d{4})/, " $1");
    };

    const today = new Date();
    const formattedDate = formatDate(today);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl">
                                Welcome {user.name}!
                            </h1>
                            <h6 className="text-xs text-gray-500/70">
                                {formattedDate}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
