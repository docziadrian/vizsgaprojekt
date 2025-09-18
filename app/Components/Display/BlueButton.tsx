const BlueButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-gradient-to-r from-blue-600/5 via-blue-200/20 to-blue-500/5 border-3 border-[#113ec2] max-w-56 min-w-56  justify-center tn-salient rounded-full text-base  px-6 py-3 inline-flex items-center gap-3 shadow-salient-lg hover:bg-[#113dc2c4] hover:text-white transition-all duration-400">
        {children}
    </button>
  );
};

export default BlueButton;