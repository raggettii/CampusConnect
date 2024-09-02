export default function NoData({ text }: { text: string }) {
  return (
    <div className=" h-[680px] flex justify-center">
      <div className=" flex flex-col justify-center">
        <div className=" font-bold text-xl text-slate-800 shadow-2xl  mb-2">
          {text}
        </div>
      </div>
    </div>
  );
}
