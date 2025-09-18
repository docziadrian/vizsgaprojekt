const OrangeButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-gradient-to-r from-blue-600/5 via-blue-200/25 to-blue-500/5 border-3 border-[#f18c49d0] max-w-56 min-w-56 justify-center btn-salient rounded-full text-base  px-6 py-3 inline-flex items-center gap-3 shadow-salient-lg hover:bg-[#f18c49d0] hover:text-white transition-all duration-400">
        {children}
    </button>
  );
};

export default OrangeButton;