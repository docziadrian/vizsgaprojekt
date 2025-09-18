import { TroubleshootSharp } from "@mui/icons-material";
import Link from "next/link";

const UserDropDown = ({
  user,
  isOpen,
}: {
  user: any | null;
  isOpen: boolean;
}) => {
  const handleLogout = () => {}
  const theme = "light"
  const isDark = false

  return (
    <div
      className={`absolute top-10 -left-32 w-72 rounded-sm py-6 px-4 flex flex-col gap-2 border-2 z-50 ${
        isDark
          ? "bg-[#222831] text-white border-gray-700 shadow-xl shadow-black/20"
          : "bg-white text-black border-gray-200 shadow-md"
      } ${isOpen ? "block" : "hidden"}`}
    >
      {user?.email ? (
        <div className="flex flex-col gap-0">
          <p className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-700"}`}>{user.username}</p>
          <p className={`text-sm font-black ${isDark ? "text-gray-400" : "text-gray-500"}`}>{user.email}</p>
          <div className={`w-full h-0.5 shadow-lg blur-[0.4px] my-1 ${isDark ? "bg-gray-700 border-b border-gray-700" : "bg-gray-400 border-b border-gray-300"}`} />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <Link
                href="/user/settings"
                className={`w-full transition-all duration-300 flex items-center gap-2 rounded-sm p-2 ${
                  isDark
                    ? "text-gray-300 hover:bg-[#2f2f2f] hover:text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <TroubleshootSharp className="w-4 h-4" />
                <p>Adatok szerkesztése</p>
              </Link>
              <Link
                href="/user/orders"
                className={`w-full transition-all duration-300 flex items-center gap-2 rounded-sm p-2 ${
                  isDark
                    ? "text-gray-300 hover:bg-[#2f2f2f] hover:text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <TroubleshootSharp className="w-4 h-4" />
                <p>Rendeléseim</p>
              </Link>
              <Link
                href="/user/cupons"
                className={`w-full transition-all duration-300 flex items-center gap-2 rounded-sm p-2 ${
                  isDark
                    ? "text-gray-300 hover:bg[#2f2f2f] hover:text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <TroubleshootSharp className="w-4 h-4" />
                <p>Kuponjaim</p>
              </Link>
              <Link
                href="/user/history"
                className={`w-full transition-all duration-300 flex items-center gap-2 rounded-sm p-2 ${
                  isDark
                    ? "text-gray-300 hover:bg-[#2f2f2f] hover:text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <TroubleshootSharp className="w-4 h-4" />
                <p>Összes megtekintett termékek</p>
              </Link>
              <Link
                href="/user/favorites"
                className={`w-full transition-all duration-300 flex items-center gap-2 rounded-sm p-2 ${
                  isDark
                    ? "text-gray-300 hover:bg-[#2f2f2f] hover:text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <TroubleshootSharp className="w-4 h-4" />
                <p>Kívánságlista</p>
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className={`w-full rounded-sm p-2 flex items-center gap-2 ${
                isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-900"
              }`}
            >
              <TroubleshootSharp className="w-4 h-4" />
              Kijelentkezés
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <h3 className={`text-sm font-semibold py-1 ${isDark ? "text-white" : "text-black"}`}>Szia!</h3>
            <p className={`text-xs ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Jelenleg nem vagy bejelentkezve. Jelentkezz be vagy regisztrálj a gyorsabb vásárláshoz, és az extra funkciókhoz.
            </p>
          </div>
          <div className="flex gap-2 w-full">
            <Link
              href="/auth/login"
              className={`flex-1 text-center rounded-sm p-2 ${
                isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-900"
              }`}
            >
              Bejelentkezés
            </Link>
            <Link
              href="/auth/registration"
              className={`flex-1 text-center rounded-sm p-2 ${
                isDark ? "bg-transparent text-white border border-gray-600 hover:bg-[#2f2f2f]" : "bg-transparent text-black border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Regisztráció
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropDown;