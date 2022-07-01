import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupdata) {
    console.log(enteredMeetupdata);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;