import React, { useState, useEffect } from 'react';

const MatchesPage = () => {
    const [matches, setMatches] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const findMatches = async (latitude, longitude) => {
            try {
                const response = await fetch('/api/matches/find-matches', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        latitude,
                        longitude,
                        radius: 10000 // 10 km radius
                    }),
                });
                const data = await response.json();
                setMatches(data);
            } catch (error) {
                setError('Error fetching matches');
                console.error(error);
            }
        };

        const handleLocationError = (error) => {
            setError('Error getting location: ' + error.message);
            console.error(error);
        };

        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        findMatches(latitude, longitude);
                    },
                    handleLocationError,
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0,
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };

        getUserLocation();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {matches.map((match, index) => (
                <div key={index}>
                    <h3>{match.user.username}</h3>
                    <p>Similarity Score: {match.score}</p>
                </div>
            ))}
        </div>
    );
};

export default MatchesPage;

/* Get User Location:

The getUserLocation function checks if the browser supports Geolocation. If it does, it requests the user's current position.
The getCurrentPosition method takes a success callback, an error callback, and an optional options object to configure the geolocation request.
Handle Success:

If the location is successfully retrieved, the findMatches function is called with the user's latitude and longitude.
Handle Errors:

The handleLocationError function sets an error message if there's an issue getting the user's location.
State Management:

The error state is used to display any errors that occur during the geolocation request or fetching matches.
The matches state holds the list of matched users.
This way, the app dynamically uses the user's actual coordinates to find matches instead of hardcoded example coordinates. */