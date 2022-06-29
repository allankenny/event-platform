import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image, CircleNotch } from "phosphor-react";
import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";

// Chamar query do graphql sem o graphql generation
// const GET_LESSON_BY_SLUG = gql`
//   query GetLessonBySlug ($slug : String) {
//     lesson(where: {slug: $slug}){
//       videoId
//       title
//       description
//       teacher{
//         bio
//         avatarURL
//         name
//       }
//     }
//   }
// `

// interface GetLessonBySlugResponse {
//   lesson:{
//     videoId: string;
//     title: string;
//     description: string;
//     teacher:{
//       bio: string;
//       name: string;
//       avatarURL: string;
//     }
//   }
// }

interface VideoProps{
  lessonSlug : string;
}
export function Video( props : VideoProps){
  // const {data} = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG,{
  //   variables:{
  //     slug: props.lessonSlug,
  //   }
  // })

  const { data } = useGetLessonBySlugQuery({
    variables:{
      slug: props.lessonSlug,
    }
  })

  if(!data || !data.lesson){
    return(
      <div className="flex-1 flex items-center justify-center"> 
        <div className="text-blue-500 animate-spin">
          <CircleNotch size={50}  />
        </div>
      </div>
    )
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img 
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL} 
                  alt="imagem do profesor" 
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="p-4 text-sm bg-purple-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purple-700 transition-colors">
              <DiscordLogo size={20}/>
              Comunidade do Discord
            </a>
            <a href="" className="p-4 text-sm border border-purple-600 text-purple-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purple-600 hover:text-white transition-colors">
              <Lightning size={20}/>
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-purple-600 h-full p-6 flex items-center">
              <FileArrowDown  size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                Material Complementar
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center text-blue-500">
              <CaretRight size={30}/>
            </div>
          </a>
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-purple-600 h-full p-6 flex items-center">
              <Image  size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                Wallpapers exclusivos
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center text-blue-500">
              <CaretRight size={30}/>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  )
}