<div align="center">
  <h1>R6-INFO.js</h1>
  <h3>A simple wrapper for the Rainbow Six Siege API that allows you to easily retrieve information about maps, operators, ranks, seasons, charms and service status.</h3>
  <p>
    <a href="https://github.com/matteotorna/r6-info.js/releases/latest"><img
      src="https://img.shields.io/github/v/release/matteotorna/r6info.js?label=version"
      alt="Version"
    /></a>
    <a href="https://github.com/matteotorna/r6-info.js/releases/latest"><img
      src="https://img.shields.io/github/release-date/matteotorna/r6info.js?label=latest%20release"
      alt="Latest release"
    /></a>
    <a href="https://www.npmjs.com/package/r6info.js"><img
      src="https://img.shields.io/npm/dt/r6-info.js.svg"
      alt="NPM downloads"
    /></a>
  </p>
</div>

## Installation

```sh
npm install r6info.js
```
or

```sh
npm i r6-info.js
```

## Getting an Access Token

Before making any API requests, you need to generate an access token using the `TokenManager` class. The `TokenManager` class provides methods to generate, set, get, validate, and clear the access token.

Here's an example of how to use the `TokenManager` class:

```javascript
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    // Generate a new token
    const { token, expiresIn, callId } = await tokenManager.generateToken();
    console.log('Token generated successfully');
    console.log('Token:', token);
    console.log('Expires In:', expiresIn);
    console.log('Call ID:', callId);

    // Get the current token
    const currentToken = tokenManager.getToken();
    console.log('Current token:', currentToken);

    // Check if the token is valid
    const isValid = tokenManager.isTokenValid();
    console.log('Is token valid?', isValid);

    // Clear the token
    tokenManager.clearToken();
    console.log('Token cleared');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

### Methods

## Getting Rank Information

The `getRanks()` function supports retrieving rank information across different versions of the game's ranking system, from v1 to v6. This flexibility allows users to query rank data that aligns with specific game seasons or ranking system updates. Here are examples demonstrating how to use the `getRanks()` function for each version, including filtering options for `min_mmr` and `max_mmr`.

`v1: Until Y1S3 | #3 | Skull Rain`

`v2: Y1S4 | #4 | Red Crow`

`v3: Y2S1 - Y4S2 | #5 - #14 | Velvet Shell - Phantom Sight`

`v4: Y4S3 - Y6S2 | #15 - #22 | Ember Rise - North Star`

`v5: Y6S3 - Y7S3 | #23 - #27 | Crystal Guard - Brutal Swarm`

`V6: Y7S4+ | #28+ | Solar Raid+ (Ranked 2.0)`

### Version 1 (v1)

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();

    const ranksV1 = await r6info.getRanks(callId, 'v1', {});
    console.log('All Ranks v1:', ranksV1);

    const filteredRanksV1 = await r6info.getRanks(callId, 'v1', { min_mmr: 2000, max_mmr: 2500 });
    console.log('Filtered Ranks v1:', filteredRanksV1);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

### Version 2 (v2)

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();

    const ranksV2 = await r6info.getRanks(callId, 'v2', {});
    console.log('All Ranks v2:', ranksV2);

    const filteredRanksV2 = await r6info.getRanks(callId, 'v2', { min_mmr: 2500, max_mmr: 3000 });
    console.log('Filtered Ranks v2:', filteredRanksV2);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

### Version 3 (v3)

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();

    const ranksV3 = await r6info.getRanks(callId, 'v3', {});
    console.log('All Ranks v3:', ranksV3);

    const filteredRanksV3 = await r6info.getRanks(callId, 'v3', { min_mmr: 3000, max_mmr: 3500 });
    console.log('Filtered Ranks v3:', filteredRanksV3);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

### Version 4 (v4)

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();

    const ranksV4 = await r6info.getRanks(callId, 'v4', {});
    console.log('All Ranks v4:', ranksV4);

    const filteredRanksV4 = await r6info.getRanks(callId, 'v4', { min_mmr: 3500, max_mmr: 4000 });
    console.log('Filtered Ranks v4:', filteredRanksV4);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

### Version 5 (v5)

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();

    const ranksV5 = await r6info.getRanks(callId, 'v5', {});
    console.log('All Ranks v5:', ranksV5);

    const filteredRanksV5 = await r6info.getRanks(callId, 'v5', { min_mmr: 4000, max_mmr: 4500 });
    console.log('Filtered Ranks v5:', filteredRanksV5);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```


### Version 6 (v6)

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();

    const ranksV6 = await r6info.getRanks(callId, 'v6', {});
    console.log('All Ranks v6:', ranksV6);

    const filteredRanksV6 = await r6info.getRanks(callId, 'v6', { min_mmr: 4500, max_mmr: 5000 });
    console.log('Filtered Ranks v6:', filteredRanksV6);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Getting Service Status

The `getServiceStatus` method allows you to retrieve the current service status of Rainbow Six Siege. It returns information about the status of different platforms and their associated services.

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();
    const serviceStatus = await r6info.getServiceStatus(callId);
    console.log('Service Status:', serviceStatus);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Getting Map Information

The `getMaps` method allows you to retrieve information about maps in Rainbow Six Siege. You can get all maps or filter them based on specific criteria such as name, location, release date, playlists, and rework status.

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();

    // Get all maps
    const allMaps = await r6info.getMaps(callId);
    console.log('All Maps:', allMaps);

    // Filter maps by name
    const filteredMapsByName = await r6info.getMaps(callId, { name: 'Bank' });
    console.log('Filtered Maps by Name:', filteredMapsByName);

    // Filter maps by location
    const filteredMapsByLocation = await r6info.getMaps(callId, { location: 'USA' });
    console.log('Filtered Maps by Location:', filteredMapsByLocation);

    // Filter maps by release date
    const filteredMapsByReleaseDate = await r6info.getMaps(callId, { releaseDate: '2015-12-01' });
    console.log('Filtered Maps by Release Date:', filteredMapsByReleaseDate);

    // Filter maps by playlists
    const filteredMapsByPlaylists = await r6info.getMaps(callId, { playlists: 'ranked' });
    console.log('Filtered Maps by Playlists:', filteredMapsByPlaylists);

    // Filter maps by rework status
    const filteredMapsByRework = await r6info.getMaps(callId, { mapReworked: true });
    console.log('Filtered Maps by Rework Status:', filteredMapsByRework);

    // Combine multiple filters
    const filteredMapsCombined = await r6info.getMaps(callId, {
      name: 'Clubhouse',
      location: 'Germany',
      playlists: 'ranked',
      mapReworked: 'September 2021',
    });
    console.log('Filtered Maps with Combined Filters:', filteredMapsCombined);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Getting Operator Information

The `getOperators` method allows you to retrieve information about operators in Rainbow Six Siege. You can get all operators or filter them based on specific criteria such as name, safe name, real name, birthplace, age, date of birth, season introduced, health, speed, unit, country code, roles, and side.

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();

    // Get all operators
    const allOperators = await r6info.getOperators(callId);
    console.log('All Operators:', allOperators);

    // Filter operators by name
    const filteredOperatorsByName = await r6info.getOperators(callId, { name: 'Ash' });
    console.log('Filtered Operators by Name:', filteredOperatorsByName);

    // Filter operators by safe name
    const filteredOperatorsBySafeName = await r6info.getOperators(callId, { safename: 'recruit' });
    console.log('Filtered Operators by Safe Name:', filteredOperatorsBySafeName);

    // Filter operators by real name
    const filteredOperatorsByRealName = await r6info.getOperators(callId, { realname: 'Eliza Cohen' });
    console.log('Filtered Operators by Real Name:', filteredOperatorsByRealName);

    // Filter operators by birthplace
    const filteredOperatorsByBirthplace = await r6info.getOperators(callId, { birthplace: 'Jerusalem, Israel' });
    console.log('Filtered Operators by Birthplace:', filteredOperatorsByBirthplace);

    // Filter operators by age
    const filteredOperatorsByAge = await r6info.getOperators(callId, { age: 33 });
    console.log('Filtered Operators by Age:', filteredOperatorsByAge);

    // Filter operators by date of birth
    const filteredOperatorsByDateOfBirth = await r6info.getOperators(callId, { date_of_birth: '1984-12-24' });
    console.log('Filtered Operators by Date of Birth:', filteredOperatorsByDateOfBirth);

    // Filter operators by season introduced
    const filteredOperatorsBySeasonIntroduced = await r6info.getOperators(callId, { season_introduced: 'Y1S1' });
    console.log('Filtered Operators by Season Introduced:', filteredOperatorsBySeasonIntroduced);

    // Filter operators by health
    const filteredOperatorsByHealth = await r6info.getOperators(callId, { health: 1 });
    console.log('Filtered Operators by Health:', filteredOperatorsByHealth);

    // Filter operators by speed
    const filteredOperatorsBySpeed = await r6info.getOperators(callId, { speed: 3 });
    console.log('Filtered Operators by Speed:', filteredOperatorsBySpeed);

    // Filter operators by unit
    const filteredOperatorsByUnit = await r6info.getOperators(callId, { unit: 'FBI SWAT' });
    console.log('Filtered Operators by Unit:', filteredOperatorsByUnit);

    // Filter operators by country code
    const filteredOperatorsByCountryCode = await r6info.getOperators(callId, { country_code: 'US' });
    console.log('Filtered Operators by Country Code:', filteredOperatorsByCountryCode);

    // Filter operators by roles
    const filteredOperatorsByRoles = await r6info.getOperators(callId, { roles: 'attacker' });
    console.log('Filtered Operators by Roles:', filteredOperatorsByRoles);

    // Filter operators by side
    const filteredOperatorsBySide = await r6info.getOperators(callId, { side: 'attacker' });
    console.log('Filtered Operators by Side:', filteredOperatorsBySide);

    // Combine multiple filters
    const filteredOperatorsCombined = await r6info.getOperators(callId, {
      unit: 'SAS',
      side: 'defender',
      speed: 2,
    });
    console.log('Filtered Operators with Combined Filters:', filteredOperatorsCombined);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Getting Seasons

The `getSeasons` method allows you to retrieve information about seasons in Rainbow Six Siege. You can get all seasons or filter them based on specific criteria such as name, map, operators, weapons, description, code, and start date.

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();
    const serviceStatus = await r6info.getServiceStatus(callId);
    console.log('Service Status:', serviceStatus);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Getting Charms

The `getCharms` method allows you to retrieve information about charms in Rainbow Six Siege. You can get all charms or filter them based on specific criteria such as name, collections, rarity, availability, bundle, and seasons.

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();
    const charms = await r6info.getCharms(callId);
    console.log('All Charms:', charms);
    
    const filteredCharms = await r6info.getCharms(callId, { rarity: 'Legendary' });
    console.log('Filtered Charms:', filteredCharms);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Getting Attachments

The `getAttachment` method allows you to retrieve information about attachments in Rainbow Six Siege. You can get all attachments or filter them based on specific criteria such as name, style, rarity, availability, bundle, and seasons.

```javascript
import r6info from 'r6info.js';
import tokenManager from 'r6info.js/dist/tokenManager';

async function main() {
  try {
    const { token, callId } = await tokenManager.generateToken();
    const attachments = await r6info.getAttachment(callId);
    console.log('All Attachments:', attachments);
    
    const filteredAttachments = await r6info.getAttachment(callId, { name: 'Suppressor' });
    console.log('Filtered Attachments:', filteredAttachments);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```

## Interfaces

The package defines the following interfaces:

`Attachment`: Represents an attachment object.
`Charms`: Represents a charm object.
`Maps`: Represents a map object.
`Operators`: Represents an operator object.
`Ranks`: Represents a rank object.
`Seasons`: Represents a season object.
`PlatformStatus`: Represents the status of a platform.
`ServiceStatusResponse`: Represents the response object for the service status.
These interfaces define the properties and types of the objects returned by the API.

## Error Handling
The package functions throw an exception if an error occurs during API requests. Make sure to handle errors appropriately using try-catch blocks.

If the access token has expired or is invalid, an exception will be thrown with the message "Token expired or invalid". In this case, you need to obtain a new token using the getToken() function.

## License
This package is fan made, so it has been created for only informational purposes
Please note that this package is a wrapper for the Rainbow Six Siege API, and its usage is subject to the terms and conditions of the API provider.