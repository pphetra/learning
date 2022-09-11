import { useState } from "react";

export default function SingleChoices() {
  const [state, setState] = useState({
    choice: "2",
    info: "",
  });

  return (
    <div className="bg-gray-50 h-screen flex">
      <div className="m-8 p-8 bg-white rounded w-full">
        <h2>Singlechoices</h2>
        <div className="p-8">
          <h3>Age group</h3>
          <div onChange={(e) => setState({ ...state, choice: e.target.value })}>
            <div className="flex gap-2 items-center p-2">
              <input
                type="radio"
                id="choice1"
                name="choice"
                value="1"
                checked={state.choice == "1"}
              />
              <label htmlFor="choice1">Choice 1</label>
            </div>
            <div className="flex gap-2 items-center p-2">
              <input
                type="radio"
                id="choice2"
                name="choice"
                value="2"
                checked={state.choice == "2"}
              />
              <label htmlFor="choice2">Choice 2</label>
            </div>
            <div className="flex gap-2 items-center p-2">
              <input
                type="radio"
                id="choice3"
                name="choice"
                value="3"
                checked={state.choice == "3"}
              />
              <label htmlFor="choice3">Choice 3</label>
            </div>
            {state.choice === "3" && (
              <div>
                <label htmlFor="info">More info</label>
                <input
                  id="info"
                  type="text"
                  name="info"
                  className="border"
                  onChange={(e) => {
                    setState({
                      ...state,
                      info: e.target.value,
                    });
                    e.stopPropagation();
                  }}
                />
              </div>
            )}
          </div>
        </div>
        {JSON.stringify(state)}
      </div>
    </div>
  );
}
