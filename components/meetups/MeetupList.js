import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  // Vérifiez si props.meetups est undefined ou vide
  if (!props.meetups || props.meetups.length === 0) {
    return <p>No meetups found.</p>;
  }
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}
export default MeetupList;
