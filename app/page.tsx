export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950 px-6">
      <main className="flex flex-col items-center gap-8 text-center max-w-lg">
        {/* Logo */}
        <img
          src="/logo.webp"
          alt="Mobilezone"
          className="h-16 object-contain"
        />

        {/* Ícone de manutenção */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743"
            />
          </svg>
        </div>

        {/* Texto principal */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Estamos em Manutenção
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nosso site está passando por melhorias para oferecer uma experiência
            ainda melhor. Voltaremos em breve!
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gray-700" />

        {/* Domínios */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-gray-500">
          <span className="font-medium text-gray-300">mobilezone.com.py</span>
          <span className="hidden sm:inline text-gray-600">•</span>
          <span className="font-medium text-gray-300">mobilezone.com.br</span>
        </div>
      </main>
    </div>
  );
}
