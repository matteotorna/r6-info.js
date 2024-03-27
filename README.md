# r6info.js

A simple wrapper for the Rainbow Six Siege API that allows you to easily retrieve information about maps, operators, ranks, and service status.

## Installation

```sh
npm install r6info.js
```

## Getting an Access Token

Before making requests to the API, you need to obtain an access token. You can do this using the `getToken()` function:

```javascript
const { getToken } = require('r6info.js');

async function main() {
  try {
    const { token, expiresIn, callDateTime, callId, APIVersion } = await getToken();
    console.log('Token:', token);
    console.log('Expires In:', expiresIn);
    console.log('Call Date Time:', callDateTime);
    console.log('Call ID:', callId);
    console.log('API Version:', APIVersion);
  } catch (error) {
    console.error('Error during token request:', error.message);
  }
}

main();
```

## Getting Rank Information

To retrieve information about ranks, use the `getRanks()` function:

```javascript
const { getToken, getRanks } = require('r6info.js');

async function main() {
  try {
    const { token, callId } = await getToken();
    
    // Get all ranks
    const ranks = await getRanks(token, callId);
    console.log('All Ranks:', ranks);
    
    // Filter ranks by name
    const filteredRanksByName = await getRanks(token, callId, { name: 'Gold 3', version: 'v6' });
    console.log('Filtered Ranks by Name:', filteredRanksByName);
    
    // Filter ranks by minimum MMR
    const filteredRanksByMinMMR = await getRanks(token, callId, { min_mmr: 3000, version: 'v6' });
    console.log('Filtered Ranks by Minimum MMR:', filteredRanksByMinMMR);
    
    // Filter ranks by maximum MMR
    const filteredRanksByMaxMMR = await getRanks(token, callId, { max_mmr: 3500, version: 'v6' });
    console.log('Filtered Ranks by Maximum MMR:', filteredRanksByMaxMMR);
    
  } catch (error) {
    console.error('Error during ranks request:', error.message);
  }
}

main();
```

## Getting Service Status

To retrieve the service status, use the `getServiceSatus()` function:

```javascript
const { getToken, getServiceSatus } = require('r6info.js');

async function main() {
  try {
    const { token, callId } = await getToken();
    
    // Get service status
    const serviceStatus = await getServiceSatus(token, callId);
    console.log('Service Status:', serviceStatus);
    
  } catch (error) {
    console.error('Error during service status request:', error.message);
  }
}

main();
```

## Getting Map Information

To retrieve information about maps, use the `getMaps()` function:

```javascript
const { getToken, getMaps } = require('r6info.js');

async function main() {
  try {
    const { token, callId } = await getToken();
    
    // Get all maps
    const maps = await getMaps(token, callId);
    console.log('All Maps:', maps);
    
    // Filter maps by name
    const filteredMapsByName = await getMaps(token, callId, { name: 'Bank' });
    console.log('Filtered Maps by Name:', filteredMapsByName);
    
    // Filter maps by location
    const filteredMapsByLocation = await getMaps(token, callId, { location: 'USA' });
    console.log('Filtered Maps by Location:', filteredMapsByLocation);
    
    // Filter maps by release date
    const filteredMapsByReleaseDate = await getMaps(token, callId, { releaseDate: '2015-12-01' });
    console.log('Filtered Maps by Release Date:', filteredMapsByReleaseDate);
    
    // Filter maps by playlists
    const filteredMapsByPlaylists = await getMaps(token, callId, { playlists: 'ranked' });
    console.log('Filtered Maps by Playlists:', filteredMapsByPlaylists);
    
    // Filter maps by rework status
    const filteredMapsByRework = await getMaps(token, callId, { mapReworked: true });
    console.log('Filtered Maps by Rework Status:', filteredMapsByRework);
  } catch (error) {
    console.error('Error during maps request:', error.message);
  }
}

main();
```

## Getting Operator Information

To retrieve information about operators, use the `getOperators()` function:

```javascript
const { getToken, getOperators } = require('r6info.js');

async function main() {
  try {
    const { token, callId } = await getToken();
    
    // Get all operators
    const operators = await getOperators(token, callId);
    console.log('All Operators:', operators);
    
    // Filter operators by name
    const filteredOperatorsByName = await getOperators(token, callId, { name: 'Ash' });
    console.log('Filtered Operators by Name:', filteredOperatorsByName);
    
    // Filter operators by safe name
    const filteredOperatorsBySafeName = await getOperators(token, callId, { safename: 'recruit' });
    console.log('Filtered Operators by Safe Name:', filteredOperatorsBySafeName);
    
    // Filter operators by real name
    const filteredOperatorsByRealName = await getOperators(token, callId, { realname: 'Eliza Cohen' });
    console.log('Filtered Operators by Real Name:', filteredOperatorsByRealName);
    
    // Filter operators by birthplace
    const filteredOperatorsByBirthplace = await getOperators(token, callId, { birthplace: 'Jerusalem, Israel' });
    console.log('Filtered Operators by Birthplace:', filteredOperatorsByBirthplace);
    
    // Filter operators by age
    const filteredOperatorsByAge = await getOperators(token, callId, { age: 33 });
    console.log('Filtered Operators by Age:', filteredOperatorsByAge);
    
    // Filter operators by date of birth
    const filteredOperatorsByDateOfBirth = await getOperators(token, callId, { date_of_birth: '1984-12-24' });
    console.log('Filtered Operators by Date of Birth:', filteredOperatorsByDateOfBirth);
    
    // Filter operators by season introduced
    const filteredOperatorsBySeasonIntroduced = await getOperators(token, callId, { season_introduced: 'Y1S1' });
    console.log('Filtered Operators by Season Introduced:', filteredOperatorsBySeasonIntroduced);
    
    // Filter operators by health
    const filteredOperatorsByHealth = await getOperators(token, callId, { health: 1 });
    console.log('Filtered Operators by Health:', filteredOperatorsByHealth);
    
    // Filter operators by speed
    const filteredOperatorsBySpeed = await getOperators(token, callId, { speed: 3 });
    console.log('Filtered Operators by Speed:', filteredOperatorsBySpeed);
    
    // Filter operators by unit
    const filteredOperatorsByUnit = await getOperators(token, callId, { unit: 'FBI SWAT' });
    console.log('Filtered Operators by Unit:', filteredOperatorsByUnit);
    
    // Filter operators by country code
    const filteredOperatorsByCountryCode = await getOperators(token, callId, { country_code: 'US' });
    console.log('Filtered Operators by Country Code:', filteredOperatorsByCountryCode);
    
    // Filter operators by roles
    const filteredOperatorsByRoles = await getOperators(token, callId, { roles: 'attacker' });
    console.log('Filtered Operators by Roles:', filteredOperatorsByRoles);
    
    // Filter operators by side
    const filteredOperatorsBySide = await getOperators(token, callId, { side: 'attacker' });
    console.log('Filtered Operators by Side:', filteredOperatorsBySide);
    
  } catch (error) {
    console.error('Error during operators request:', error.message);
  }
}

main();
```


## Error Handling
The package functions throw an exception if an error occurs during API requests. Make sure to handle errors appropriately using try-catch blocks.

If the access token has expired or is invalid, an exception will be thrown with the message "Token expired or invalid". In this case, you need to obtain a new token using the getToken() function.

## License
This package is released under the MIT License.