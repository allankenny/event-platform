import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscribeMutation } from "../graphql/generated";
import imageCode from "./../assets/mockup_background.png"

// Chamar query do graphql sem o graphql generation
// const CREATE_SUBSCRIBE_MUTATION = gql`
//   mutation CreateSubscribe ($name: String!, $email: String!) {
//     createSubscriber(data: {name: $name, email: $email}) {
//       id
//     }
//   }
// `

export function Subscriber(){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscribe, {loading}] = useCreateSubscribeMutation();

  async function handleSubscribe(event: FormEvent){
    event.preventDefault();
    await createSubscribe({
      variables:{
        name,
        email,
      }
    })
    navigate('/event/lesson/abertura-evento');
  }
  return(
    <div className="min-h-screen bg-purple bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.4rem] leading-tight">
            Uma <strong className="text-blue-500 text-[2.8rem]">plataforma completa</strong> para treinamentos, eventos e cursos
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxad">
            Cadastre seus vídeos, defina lançamentos e tipo das aulas e entregue ao seus cliente uma execelente experiência de aula.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form onSubmit={handleSubscribe} action="" className=" flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo" 
              onChange={event => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
            />
            <button
              disabled={loading}
              className="mt-4 bg-purple-600 rounded uppercase py-4 text-sm font-bold hover:bg-purple-700 transition-colors disabled:opacity-50"
              type="submit" 
            >
              garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={imageCode} className="mt-10" alt="" />
    </div>
  )
}