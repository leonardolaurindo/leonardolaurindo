export default function PortfolioSection() {
    return (
        <section id='portfolio' className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Projetos em Destaque
                </h2>
                <p className="max-w-[100%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 ">
                    Descubra o impacto de soluções web inovadoras e personalizadas.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="col-span-1">
                    <h1 className="font-heading tex-3xl md:text-4xl lg:text-5xl">SISAUT</h1>
                    <p className="mt-1 text-base font-semibold text-muted-foreground">Sistema de Automação Comercial</p>
                    <p className="bg-slate-50 p-2.5 dark:bg-white/5 border rounded-md font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aliquam repudiandae laborum, mollitia modi minima illum expedita est sequi velit soluta, optio alias explicabo facilis quis odit itaque nostrum eos.</p>
                    <div className="flex flex-row font-heading gap-3 items-center">

                    </div>
                </div>
                <div className="col-span-2">


                </div>
            </div>
        </section>

    )
}