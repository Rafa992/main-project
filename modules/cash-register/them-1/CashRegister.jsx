import Kassa from "@/modules/cash-register/them-1/components/kassa/Kassa";
import Navbar from "@/modules/cash-register/them-1/components/header/Navbar";
import Table from "@/modules/cash-register/them-1/components/Table";

export default function CashRegister() {
  return (
    <main className="flex">
      <div className="containerKassa flex gap-[5px]">
        <section className="left w-[80%]">
          <Navbar />
          <Table />
        </section>
        <section className="right w-[20%]">
          <Kassa />
        </section>
      </div>
    </main>
  );
}
