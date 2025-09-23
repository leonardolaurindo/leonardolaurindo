import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { stackContent } from '@/config/content'

export default function StackSection() {
  return (
    <section
      id="stack"
      className="bg-slate-50 container space-y-6 py-8 md:py-12 lg:py-24 dark:bg-white/5"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {stackContent.heading}
        </h2>
        <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {stackContent.description}
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {stackContent.technologies.map((tech, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-sm"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox={tech.icon.viewBox}
                className="h-12 w-12 fill-current"
              >
                <path d={tech.icon.path} />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mx-auto text-center md:max-w-[58rem]">
                <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Especializado nas principais tecnologias e frameworks para desenvolvimento web moderno e eficiente.
                </p>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="1">
                        <AccordionTrigger>Hel pergunta 01</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                        <AccordionTrigger>Hel pergunta 02</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="3">
                        <AccordionTrigger>Hel pergunta 03</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="4">
                        <AccordionTrigger>Hel pergunta 04</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus iste distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="5">
                        <AccordionTrigger>Hel pergunta 05</AccordionTrigger>
                        <AccordionContent className="text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi facilis rem, tempora excepturi repellat doloribus quaerat repudiandae fugit ad laborum odio facere accusamus ite distinctio, quisquam soluta reprehenderit ipsum at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dignissimos ipsam dolor eum quasi, soluta molestias laborum vel tempore assumenda dicta delectus optio nostrum sint aperiam? Vitae, sit. Atque, excepturi.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div> */}
    </section>
  )
}
