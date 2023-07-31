import Image from "@/components/Image";
import Icon from "@/components/Icon";

type PhotoEditorProps = {
    src: any;
    width: number;
    height: number;
    edit?: boolean;
};

const PhotoEditor = ({ src, width, height, edit }: PhotoEditorProps) => (
    <div className="relative border border-n-3 rounded-xl overflow-hidden dark:border-n-5">
        <Image
            className="w-full"
            src={src}
            width={width}
            height={height}
            alt=""
        />
        {edit && (
            <div className="absolute top-3 right-3 flex flex-col">
                <button className="btn-purple btn-square w-11 h-11 mb-2">
                    <Icon name="navigation-pointer" />
                </button>
                <button className="btn-dark btn-square w-11 h-11">
                    <Icon name="sliders" />
                </button>
            </div>
        )}
    </div>
);

export default PhotoEditor;
