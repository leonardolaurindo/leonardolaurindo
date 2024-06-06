import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export const ImageDialog = ({ imgSrc, alt }: any) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <img src={imgSrc} alt={alt} className="cursor-pointer max-w-full lg:ml-auto" />
            </DialogTrigger>
            <DialogContent className="fixed w-full h-full z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 p-4 sm:p-6 md:p-8">
                <div className="relative max-h-full max-w-full">
                    <DialogHeader>
                        <DialogTitle>Image Preview</DialogTitle>
                        <DialogDescription>
                            Click outside the dialog or press the Escape key to close.
                        </DialogDescription>
                    </DialogHeader>
                    <img src={imgSrc} alt={alt} className="max-h-full max-w-full object-contain" />
                </div>
            </DialogContent>
        </Dialog>
    )
}