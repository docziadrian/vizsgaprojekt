const UserLoggedOut = () => {
  return (
    <>
      <div className="flex items-center gap-2 ml-2">
          <a
            href="/signin"
            className="px-4 py-1 rounded-full border border-[#e3eafc] bg-white/70 text-[#241c3a] text-sm font-medium shadow-sm hover:bg-[#f3f4f8] transition"
          >
            Bejelentkezés
          </a>
          <a
            href="/get-started"
            className="px-4 py-1 rounded-full bg-[#113ec2] text-white text-sm font-medium shadow-sm border border-[#e3eafc] hover:bg-[#005ece] transition"
          >
            Regisztráció
          </a>
        </div>
    </>
  );
};

export default UserLoggedOut;
