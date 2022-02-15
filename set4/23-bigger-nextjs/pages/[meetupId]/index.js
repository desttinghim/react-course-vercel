// our-domain.com/[meetupId]
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/320px-Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="This is a First Meetup"
    />
  );
};

export default MeetupDetails;
