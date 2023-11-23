INSERT INTO events (organizer_id, eventTitle, eventDescription, urlEvent,typeOfActivity,artistEvent,initialDate,finalDate,eventImage) 
  VALUES (4,'evento4 nuevo4','descriocio4 descriocion4','www.elevento4.com','paid','jose4','023-11-15T12:00:00','023-11-15T15:00:00','www.avatar4.com') 


INSERT INTO event_by_artist (id,event_by_artist_id) 
  VALUES (1,1)

#Todos los ventos de un organizador segun su ID
select * 
from organizer o 
inner join events e 
	on o.id_user = e.organizer_id 
inner join event_by_artist ea
	on e.id = ea.id
inner join artists a
	on a.id = ea.event_by_artist_id
where o.id_user =1

# solo eventos free
select * from events where typeofactivity = 'free'  

# uodate events
UPDATE events SET eventtitle='Bob Marley', urlevent='www.jamaica.com' WHERE id=1;

