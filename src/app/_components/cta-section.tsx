export default function CtaSection() {
    return (
        <section className="py-8">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">
                <div
                    className="lg:py-14 lg:px-20 p-10 rounded-2xl flex items-center justify-between flex-col lg:flex-row bg-gradient-to-r from-violet-950 via-violet-500 to-violet-800 border dark:border-slate-50/55 border-slate-800 shadow-inner"
                >
                    <div className="block text-center mb-5 lg:text-left lg:mb-0">
                        <h2
                            className="font-manrope text-4xl text-slate-50 font-semibold mb-5 lg:mb-2"
                        >
                            Vamos construir algo incrível juntos?
                        </h2>
                        <p className="text-lg text-slate-50/75">
                            Fale comigo diretamente no WhatsApp para discutir seu projeto e encontrar a melhor solução.
                        </p>
                    </div>
                    <a href="https://api.whatsapp.com/send/?phone=5588981907153&text=Ol%C3%A1+Leo%2C+eu+vim+pelo+seu+site%21"
                        target="_blank"
                        className="flex items-center gap-2 bg-slate-50 rounded-full shadow-sm text-lg text-violet-500 font-semibold py-4 px-8 transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 50 50" className="fill-violet-500">
                            <path d="M 25 2 C 12.318 2 2 12.318 2 25 C 2 28.96 3.0228906 32.853062 4.9628906 36.289062 L 2.0371094 46.730469 C 1.9411094 47.073469 2.03325 47.440312 2.28125 47.695312 C 2.47225 47.892313 2.733 48 3 48 C 3.08 48 3.1612344 47.989703 3.2402344 47.970703 L 14.136719 45.271484 C 17.463719 47.057484 21.21 48 25 48 C 37.682 48 48 37.682 48 25 C 48 12.318 37.682 2 25 2 z M 16.642578 14 C 17.036578 14 17.428437 14.005484 17.773438 14.021484 C 18.136437 14.039484 18.624516 13.883484 19.103516 15.021484 C 19.595516 16.189484 20.775875 19.058563 20.921875 19.351562 C 21.069875 19.643563 21.168656 19.984047 20.972656 20.373047 C 20.776656 20.762047 20.678813 21.006656 20.382812 21.347656 C 20.086813 21.688656 19.762094 22.107141 19.496094 22.369141 C 19.200094 22.660141 18.892328 22.974594 19.236328 23.558594 C 19.580328 24.142594 20.765484 26.051656 22.521484 27.597656 C 24.776484 29.583656 26.679531 30.200188 27.269531 30.492188 C 27.859531 30.784188 28.204828 30.734703 28.548828 30.345703 C 28.892828 29.955703 30.024969 28.643547 30.417969 28.060547 C 30.810969 27.477547 31.204094 27.572578 31.746094 27.767578 C 32.288094 27.961578 35.19125 29.372062 35.78125 29.664062 C 36.37125 29.956063 36.766062 30.102703 36.914062 30.345703 C 37.062062 30.587703 37.062312 31.754234 36.570312 33.115234 C 36.078313 34.477234 33.717984 35.721672 32.583984 35.888672 C 31.565984 36.037672 30.277281 36.10025 28.863281 35.65625 C 28.006281 35.38625 26.907047 35.028734 25.498047 34.427734 C 19.575047 31.901734 15.706156 26.012047 15.410156 25.623047 C 15.115156 25.234047 13 22.46275 13 19.59375 C 13 16.72475 14.524406 15.314469 15.066406 14.730469 C 15.608406 14.146469 16.248578 14 16.642578 14 z"></path>
                        </svg>
                        WhatsApp
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-violet-500">
                            <path d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

    )
}


