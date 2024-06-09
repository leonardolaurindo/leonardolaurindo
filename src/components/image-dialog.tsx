import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

export const ImageDialog = ({ imgSrc, alt }: any) => (
    <Dialog>
        <DialogTrigger asChild>
            <Image src={imgSrc} alt={alt} layout="responsive" width={1920} height={1080} className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[850px] max-w-[90vw] mx-auto">
            <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl">Clique no X para fechar</DialogTitle>
            </DialogHeader>
            <Image
                src={imgSrc}
                alt={alt}
                layout="intrinsic"
                width={1920}
                height={1080}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 850px"
                className="w-full h-auto"
                loading="lazy"
            />
        </DialogContent>
    </Dialog>
)