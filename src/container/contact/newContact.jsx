import React from 'react'

export default function newContact() {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          Contact
        </h2>
      </div>
      <div className="flex-center">
        <form className="w-[900px]">
          <input className="inputVal" type="text " placeholder="Name" />
          <input className="inputVal" type="text " placeholder="Email" />
          <textarea
            className="inputVal"
            name=""
            id=""
            cols="30"
            rows="10"></textarea>
          <button
            className="btn btn-secondary btn-fw bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
