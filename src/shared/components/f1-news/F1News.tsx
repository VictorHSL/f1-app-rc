import { F1NewsProps } from "@shared/types/F1NewsProps";


const F1News: React.FC<F1NewsProps> = ({ f1NewsData }: F1NewsProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <a href={f1NewsData.link} target="_blank">
                <img className="w-full" src={f1NewsData.thumbnail} />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{f1NewsData.title}</div>
                {/* <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p> */}
                </div>
            </a>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <a href={f1NewsData.sourceLink} target="_blank">#{f1NewsData.sourceName}</a>
                </span>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
            </div>
        </div>
    );
}

export default F1News;