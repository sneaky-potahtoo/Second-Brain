import { OpenIcon } from "../icons/OpenIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";


interface CardProps {
  title: string;
  type: "github" | "youtube";
  link: string;
}


function getYouTubeEmbedUrl(rawLink: string) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\/shorts\/)([^#\&\?]*).*/;
  const match = rawLink.match(regExp);

  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  
  return rawLink;
}


export function Card({ title, type, link }: CardProps) {
  const embedLink = type === "youtube" ? getYouTubeEmbedUrl(link) : link;

  return (
    <div>
      <div className="p-4 bg-white rounded-md border border-gray-200 max-w-96">

        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <YoutubeIcon size="md" />
            </div>
            {title}
          </div>

          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <OpenIcon size="md" />
              </a>
            </div>
            <div className="text-gray-500">
              <ShareIcon size="md" />
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full rounded-lg"
              src={embedLink} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          )}
        </div>

      </div>
    </div>
  );
}