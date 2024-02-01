import { useEffect, useRef, useState } from "react";
import "../App.css";
import Box from "./Box";
// https://dummyjson.com/users/search?q=John
const Multiuser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValuesSet, setSelectedValuesSet] = useState(new Set());
  const inputRef = useRef();
  // We are using set to keep only distinct values
  // so that after user clicks on one element it should not suggest it next time
  // as it is selected

  useEffect(() => {
    const fetchUsers = () => {
      console.log("Fetching users...");
      if (searchTerm.trim() === "") {
        setSearchSuggestions([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSearchSuggestions(data))
        .catch((err) => console.log(err.message));
    };
    fetchUsers();
  }, [searchTerm]);

  const handleSelectedValues = (user) => {
    console.log("Selected User", user.firstName);
    // pushing user into selected values till now
    const updatedArray = [...selectedValues, user];
    setSelectedValues(updatedArray);
    // storing user emails in set
    setSelectedValuesSet(new Set([...selectedValuesSet, user.email]));
    // after selecting search term should become empty
    setSearchTerm("");
    // After selecting close the suggestions by putting empty array in it
    setSearchSuggestions([]);
    // for making focus on input after adding a value
    // select karne ke baad input ka focus on kardo taaki user ko input pe click na karna
    // pade , isse user experience acha hota hai
    inputRef.current.focus();
  };
  const handleRemoveSelectedValue = (user) => {
    console.log("Removing Selected value", user.firstName);
    console.log("SELECTED VALUES : ", selectedValues);
    const updatedValues = selectedValues.filter((selectedUser) => {
      return selectedUser.id !== user.id;
    });
    console.log("UPDATED VALUES : ", updatedValues);
    setSelectedValues(updatedValues);
    const updatedSet = new Set(...selectedValuesSet);
    updatedSet.delete(user.email);
    // after removing from set , put the updated array inside setSelectedValuesSet
    setSelectedValuesSet(updatedSet);
    inputRef.current.focus();
  };
  const removeBoxOnBackspace = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedValues.length > 0
    ) {
      const size = selectedValues.length;
      const lastValue = selectedValues[size - 1];
      handleRemoveSelectedValue(lastValue);
      setSearchSuggestions([]);
    }
  };

  return (
    <div className="user_search_container">
      <div className="user_search_input">
        {/* Box */}
        {selectedValues.map((user) => {
          return (
            <Box
              key={user.email}
              image={user.image}
              text={user.firstName}
              onClickFunction={() => handleRemoveSelectedValue(user)}
            />
          );
        })}
        {/* Input */}
        <div>
          <input
            ref={inputRef}
            className="user_input"
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={removeBoxOnBackspace}
          />
          {/* Search Suggestions */}
          <ul className="suggestions_list">
            {searchSuggestions?.users?.map((user) => {
              // If Set has a user that is selected already then do not show
              // that value and if set does not have then show it
              return !selectedValuesSet.has(user.email) ? (
                <li key={user.email} onClick={() => handleSelectedValues(user)}>
                  <img src={user.image} alt={`${user.firstName}`} />
                  <span>{`${user.firstName} ${user.lastName}`} </span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Multiuser;
