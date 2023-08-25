import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import { Loader } from "../";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    placeholder={placeholder}
    step={"0.0001"}
    type={type}
    value={value}
    onChange={(e) => {
      handleChange(e, name);
    }}
  />
);

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { addressTo, amount, message } = formData;

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center ">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl md:text-5xl text-white text-gradient py-1">
            E-Government
            <br />
            Sistem Transaksi Keuangan Digital 
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Meningkatkan transparansi dan akuntabilitas dalam pengelolaan keuangan.
          </p>

          {!currentAccount ? (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <span className="text-white text-base font-semibold">
              Connect to E-wallet
              </span>
            </button>
          ) : (
            <div className="flex flex-row justify-center items-center my-5 p-3 rounded-full">
              <span className="text-green-500 text-base font-semibold">
              Connected
              </span>
            </div>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Transparency</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Anti Corruption</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>

        {/* Ethereum Card */}
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          {/* Send Transaction Form */}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Alamat E-Wallet"
              name="addressTo"
              type="text"
              value={formData.addressTo}
              handleChange={handleChange}
            />
            <Input
              placeholder="Jumlah (ETH)"
              name="amount"
              type="number"
              value={formData.amount}
              handleChange={handleChange}
            />
            <Input
              placeholder="Masukkan pesan transaksi"
              name="message"
              type="text"
              value={formData.message}
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2"></div>

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Kirim
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
