import { useQueryClient } from "@tanstack/react-query"

const Error = ({info,name}:{info:string;name:string}) => {
  //kurulum aşaması
 const queryClient= useQueryClient()

 //places sorgusunu tekrar çalıştır.
 //daha önce tanımlanan sorguyu tekrardan tetikler
 const retry=()=>{
  queryClient.invalidateQueries({queryKey:[name]})
 }
  return (
    <>
    <div className="mt-20 bg-red-500 rounded-lg p-4
     text-white font-semibold text-center">
     <p className="mb-5">üzgünüz beklenmedik bir sorun oluştu.</p>
     <p>{info}</p>
     </div>
     <div className="flex justify-center my-10">
      <button onClick={retry}
       className="border hover:bg-zinc-200 px-4 py-1 rounded-md">Tekrar Dene</button></div>
     
     </>
  )
}

export default Error