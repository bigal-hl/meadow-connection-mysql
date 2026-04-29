/**
 * Connection form schema for MySQL.
 *
 * Consumed by:
 *   meadow-connection-manager#getProviderFormSchema('MySQL')
 *   ...and any UI that wants to render a "connect to MySQL" form without
 *   re-encoding the field list.  Pure data — safe to require() even when
 *   the underlying mysql2 driver is not installed.
 *
 * Field shape (see meadow-connection-manager docs for the full contract):
 *   Name        — canonical config key the connection module reads
 *   Label       — UI label
 *   Type        — String | Number | Password | Boolean | Path | Select
 *   Default     — initial value
 *   Required    — boolean (default false)
 *   Placeholder — input placeholder
 *   Help        — tooltip / hint
 *   Min, Max    — Number bounds
 *   Group       — 'Basic' (default) or 'Advanced' (collapsible)
 *   Multiplier  — form value × multiplier = stored value (sec→ms via 1000)
 *   MapTo       — alternate dotted-path target(s); if absent, stored at Name
 *   OmitIfFalsy — drop the key from the emitted config when the value is
 *                 0/empty/false (matches DataCloner's `if (x > 0)` pattern)
 */
'use strict';

module.exports =
{
	Provider:    'MySQL',
	DisplayName: 'MySQL',
	Description: 'Connect to a MySQL or MariaDB server.',
	Fields:
	[
		{ Name: 'host',            Label: 'Server',           Type: 'String',   Default: '127.0.0.1', Required: true, Placeholder: '127.0.0.1' },
		{ Name: 'port',            Label: 'Port',             Type: 'Number',   Default: 3306,        Required: true, Min: 1, Max: 65535 },
		{ Name: 'user',            Label: 'User',             Type: 'String',   Default: 'root',      Required: true },
		{ Name: 'password',        Label: 'Password',         Type: 'Password' },
		{ Name: 'database',        Label: 'Database',         Type: 'String',   Placeholder: 'meadow' },
		{ Name: 'connectionLimit', Label: 'Connection Limit', Type: 'Number',   Default: 20, Min: 1, Group: 'Advanced' }
	]
};
