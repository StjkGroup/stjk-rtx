import React from 'react';
import {Editor, Text} from '@/../components/RichText';
// import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

// const useStyles = makeStyles(() => ({
//   root: {
//
//   },
// }));

export default function Rtx() {
  // const classes = useStyles();
  const [data, setData] = React.useState<string|null>(null);

  const handleSave = (res: string) => {
    setData(res);
  }

  const value = {"blocks":[{"key":"foo","text":"网站的第一页是最重要的。无论是栏目页面还是网站的内页，都不能简单地从权重的角度与首页进行比较。因此，当与其他网站交换友情链接时，你通常使用首页进行交流。如果你想利用内页与其他网站的首页进行链接交换，你的网站必须有很高的权重。否则，没有人愿意遭受这么大的损失。因为第一页的权重最大，所以有一种极端的方式来发挥它，那就是优先考虑第一页。但是这种极端的打法不是很好。第一页是基础，但仍然需要一个完整的内页。在头版上要更加专业。网站首页权重高的主要原因有四个:第一，网站地址和与总域名相关的内部页面首页不同。首页网站是内页网站的简化版。在这种情况下，第一页上的链接也是网站地址，这将持续更长时间在线。即使网站经过微调，第一页的网址也不会被移动。除非是网络范围的维护。稳定的网络地址意味着更高的时间权重，通常包括域名和网站建设的长度。域名时间和网站建设时间有一定的差异。很多时候域名已经注册了很长一段时间，而那时网站才刚刚建成。一般来说，域名持续的时间越长，使用该域名的网站获得的权重就越大。同样，网站建立的时间越长，它自然会获得越多的权重。然而，这里应该注意的是，域名没有被K跨越，作弊在很长一段时间内没有发生。网站并没有成为时间长河中的一个死站，而是一个持续运营的网站。随着时间的推移，这样的网站会越来越重。第二，链接收集网站的主页是整个网站的根，99%的网页将有链接到主页。除了网站的内部链接之外，大多数外部链接的构建也指向第一页，甚至许多网站使用第一页作为登陆页。外部网站的导入权重，以及内部整合和蜘蛛爬行，都会使首页的链接权重高于内页。对于百度来说，只有一个包含网站的页面会被赋予相应的权重，对用户的帮助越大，网页的权重就越大。虽然很多搜索引擎优化网站都有很高的内部页面权重，但是这些内部页面经常会将链接转到第一页，这将会给第一页带来更大的权重，并且一个网站的第一页指向的内部页面的数量也是最大的，所以权重转移会更多。因此，第一页的页面权重最高。第三，网站地图和目录不仅仅是链接的集合，也是用户对主页的概念，就像当我们打开一本书时，我们首先看到的是目录页面。当我们检索这本书的内容时，首先要打开目录页。主页扮演着同样的角色。搜索引擎的算法也为用户服务。如果包含的页面对用户有用，搜索引擎会给出高分。相对于内页，首页可以更好地解决用户的需求，所以权重自然高。当然，还有一个极端的情况，那就是在一个网站中，首页的权重没有内页的权重高。这种情况通常是不正常的。例如，内页的外链比首页的外链多，首页的关键词密度太大而不能降级，首页的相关性太弱而不能满足用户的需求等。，这些都是不正常的。如果一个内部页面的重量超过了第一个页面的重量，那么爆炸物品引爆网络是正常的。总之，第一页的权重是网站权重的最大部分，但只做第一页的权重而不考虑内部页面是不够的，也不能过分忽视第一页的力量，要合理分配资源，确保第一页在健康的范围内。","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}};

  return (
    <Box display={'flex'}>
      <Box width={800} m={4}>
        <Editor defaultValue={JSON.stringify(value)} placeholder={"write something"} onSave={handleSave}/>
      </Box>
      <Box width={375} height={758} m={4} overflow={'auto'}>
        <Text value={data}/>
      </Box>
    </Box>
  )
}