import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button, Text } from '@chakra-ui/react'

function SingleItem({title, desc, url, imageURL, publishedAt}) {
  return (
             <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                 h={'280px'}
                 w={'1000px'}
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src={imageURL}
                />

                <Stack>
                  <CardBody>
                    <Heading size='md'>{title}</Heading>

                    <Text py='2'>
                      {desc}
                    </Text>
                    <Text py='1'>{publishedAt}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                    <a href={url} target={"blank"}>Read More</a>
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
  )
}

export default SingleItem