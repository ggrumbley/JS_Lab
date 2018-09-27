import React from 'react';

import
{
  Grid,
  Segment,
  Header,
  List,
} from 'semantic-ui-react';

const TeamOrganization = () => (
  <Segment>
    <Grid>
      <Grid.Column width={10}>
        <Header as="h3">Team Table of Organization</Header>
        <List size="large">
          <List.Item>
            <List.Icon name="cubes" />
            <List.Content>
              <List.Header>Team Marauder</List.Header>
              <List.List>
                <List.Item>
                  <List.Icon name="cube" />
                  <List.Content>
                    <List.Header>Starting Squad</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Cpt. Natasha Kerensky - WHM-6R Warhammer</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Colin Maclaren - MAD-3R Marauder</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Lynn Sheridan - CRD-3R Crusader</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>John Hayes - GRF-1N Griffin</List.Header>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="cube" />
                  <List.Content>
                    <List.Header>Second Squad</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Lt. Takiro Ikeda - ARC-2R Archer</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Miklos Delius - ARC-2R Archer</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Nikolai Koniev - WSP-1A Wasp</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Alex Ward - STG-3R Stinger</List.Header>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Icon name="cube" />
                  <List.Content>
                    <List.Header>Third Squad</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Lt. John "Gentleman Johnny" Clavell - RFL-3N Rifleman</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Piet Nichols - PXH-1K Phoenix Hawk</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Simon Fraser - STG-3R Stinger</List.Header>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="user" />
                        <List.Content>
                          <List.Header>Mohammar Jahan - STG-3R Stinger</List.Header>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default TeamOrganization;
