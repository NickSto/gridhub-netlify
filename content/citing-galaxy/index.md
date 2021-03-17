---
title: Citing Galaxy
---

**Please cite Galaxy in any research that uses or extends Galaxy.**

So, how can you do that?  It depends on your research:

| If you are | then please |
| ---- | ---- |
| **Referring to the Galaxy Project in general** | Cite the [primary publication](#primary-publication). |
| **Referring to specific [public Galaxy platforms](/src/use/index.md) or using them in your methods** | Cite [that platform's primary publication](#which-galaxy). |
| **Using a local or temporary cloud instance** | Cite the [primary publication](#primary-publication) and mention that a local or cloud based Galaxy was used.  (Note: We suspect that this is the most under-reported use of Galaxy.) |
| **Referencing a specific aspect of Galaxy** | Cite a [publication about that specific topic](#citing-specific-galaxy-components-features), if one is available. Topics with pubs include: <br />&bull; [Galaxy Application Programming Interface (API)](#application-programming-interface-api) <br />&bull; [Cloud](#cloud) <br />&bull; [Data Managers](#data-managers) <br />&bull; [DataSource Tools](#datasource-tools) <br />&bull; [External Display Applications](#external-display-applications) <br />&bull; [Interactive Environments](#interactive-environments) <br />&bull; [Reproducibility](#reproducibility) <br />&bull; [ToolShed](#toolshed) <br />&bull; [Training](#training) |
| **Referencing a Galaxy web resource other than those above** | See [Citing Medicine: NLM Style Guide for Authors, Editors, and Publishers](http://www.ncbi.nlm.nih.gov/books/NBK7256/) for how to cite [web pages](http://www.ncbi.nlm.nih.gov/books/NBK7274/), [wikis](http://www.ncbi.nlm.nih.gov/books/NBK7266/#A61262), and just about everything else. |



## Which Galaxy?

If you *used* Galaxy in your methods, please specify which instances of Galaxy were used: Was it [usegalaxy.org](https://usegalaxy.org/), one of the [other public Galaxy servers, cloud sevices, VMs or containers](/src/use/index.md) (and see each resource's page for citation info), or a local install?

Some excellent examples (*emphasis added*):

* Used usegalaxy.org: from [Hoyt *et al.*](http://www.g3journal.org/content/7/9/2979):

     "The sequencing data were uploaded to the Galaxy web platform, and *we used the public server at usegalaxy.org to analyze the data ([Afgan et al. 2016](http://www.g3journal.org/content/7/9/2979#ref-1))*."

* Used a [public server](/src/use/index.md): from [Bhargava, *et al.*](https://www.nature.com/articles/s41598-017-07791-8):

     "RAW files generated directly from the mass spectrometer *were imported into Galaxy-P platform<sup>[53](https://www.nature.com/articles/s41598-017-07791-8#ref-CR53)</sup> for protein identification and quantification<sup>[25](https://www.nature.com/articles/s41598-017-07791-8#ref-CR25), [51](https://www.nature.com/articles/s41598-017-07791-8#ref-CR51)</sup>.*"

     Which publication should you cite when using public accessible Galaxy platform?  Most of the platform descriptions include a *Citation(s)* section.

* Used a non-public server, from [de Carvalho Augusto *et al*](http://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0005789):
     
     "All analyses *were done on the Galaxy instance of the IHPE [http://bioinfo.univ-perp.fr](http://bioinfo.univ-perp.fr/)) [[28](http://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0005789#pntd.0005789.ref028)].*"

## Primary Publication

If you use, extend or reference Galaxy in your published work, please cite this publication:

* [Enis Afgan](/src/people/enis-afgan/index.md), [Dannon Baker](/src/people/dannon-baker/index.md), [Bérénice Batut](http://bebatut.fr/), [Marius van den Beek](http://www.ibps.upmc.fr/en/ibps/directory/1921-Marius-Van+Den+Beek),  [Dave Bouvier](/src/people/dave-bouvier/index.md), [Martin Čech](/src/people/marten/index.md), [John Chilton](/src/people/john-chilton/index.md), [Dave Clements](/src/people/dave-clements/index.md), [Nate Coraor](/src/people/nate/index.md), [Björn Grüning](/src/people/bjoern-gruening/index.md), [Aysam Guerler](/src/people/guerler/index.md), [Jennifer Hillman-Jackson](/src/people/jennifer-jackson/index.md), [Vahid Jalili](/src/people/vahid-jalili/index.md), [Helena Rasche](https://github.com/hexylena), [Nicola Soranzo](http://biowiki.crs4.it/biowiki/NicolaSoranzo), [Jeremy Goecks](/src/people/jeremy-goecks/index.md), [James Taylor](/src/people/james-taylor/index.md), [Anton Nekrutenko](/src/people/anton/index.md), and [Daniel Blankenberg](/src/people/dan/index.md). **[The Galaxy platform for accessible, reproducible and collaborative biomedical analyses: 2018 update](https://doi.org/10.1093/nar/gky379)**, *Nucleic Acids Research*, Volume 46, Issue W1, 2 July 2018, Pages W537–W544, doi:10.1093/nar/gky379

This and other references are also [available in GitHub](https://github.com/galaxyproject/galaxy/blob/dev/CITATION) as a [CITATION file](http://software-carpentry.org/blog/2013/09/introducing-citation-files.html). 

## Citing Specific Galaxy Components / Features

Cite these papers if you want to cite a particular aspect of Galaxy.

### Application Programming Interface (API)

* Clare Sloggett, Nuwan Goonasekera and [Enis Afgan](/src/people/enis-afgan/index.md). **[BioBlend: automating pipeline analyses within Galaxy and CloudMan](https://academic.oup.com/bioinformatics/article/29/13/1685/185761/BioBlend-automating-pipeline-analyses-within)**. *Bioinformatics* (2013) 29(13): 1685-1686 doi:10.1093/bioinformatics/btt199

### Cloud

*  [Enis Afgan](/src/people/enis-afgan/index.md), Andrew Lonie, [James Taylor](/src/people/james-taylor/index.md), Nuwan Goonasekera.
**[CloudLaunch: Discover and deploy cloud applications](https://doi.org/10.1016/j.future.2018.04.037)**, *Future Generation Computer Systems*, 2018, doi:10.1016/j.future.2018.04.037

### Data Managers

* [Daniel Blankenberg](/src/people/dan/index.md), James E. Johnson, The [Galaxy Team](/src/galaxy-team/index.md), [James Taylor](/src/people/james-taylor/index.md) and [Anton Nekrutenko](/src/people/anton/index.md). **[Wrangling Galaxy's Reference Data](https://academic.oup.com/bioinformatics/article/30/13/1917/205199/Wrangling-Galaxy-s-reference-data)**. *Bioinformatics* (2014) 30(13): 1917-1919 doi:10.1093/bioinformatics/btu119

### DataSource Tools

* [Daniel Blankenberg](/src/people/dan/index.md), [Nate Coraor](/src/people/nate/index.md), [Gregory Von Kuster](/src/people/greg_vonkuster/index.md), [James Taylor](/src/people/james-taylor/index.md), [Anton Nekrutenko](/src/people/anton/index.md), and The [Galaxy Team](/src/galaxy-team/index.md). **[Integrating diverse databases into an unified analysis framework: a Galaxy approach](https://academic.oup.com/database/article/doi/10.1093/database/bar011/463445)**. *Database (Oxford)*. 2011 Apr 29;2011:bar011. doi:10.1093/database/bar011.

### External Display Applications

* [Daniel Blankenberg](/src/people/dan/index.md), [John Chilton](/src/people/john-chilton/index.md), and [Nate Coraor](/src/people/nate/index.md). **[Galaxy External Display Applications: Closing a dataflow interoperability loop](https://rdcu.be/b0xnC)**. *Nat Methods* (2020). doi:10.1038/s41592-019-0727-x

### Interactive Environments

* [Björn Grüning](/src/people/bjoern-gruening/index.md), [Helena Rasche](/src/people/helena-rasche/index.md), Boris Rebolledo-Jaramillo, [Carl Eberhard](/src/people/carl-eberhard/index.md), Torsten Houwaart, [John Chilton](/src/people/john-chilton/index.md), [Nate Coraor](/src/people/nate/index.md), Rolf Backofen, [James Taylor](/src/people/james-taylor/index.md), [Anton Nekrutenko](/src/people/anton/index.md). **[Jupyter and Galaxy: Easing entry barriers into complex data analyses for biomedical researchers](http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005425)**, *PLOS Computational Biology*, doi:10.1371/journal.pcbi.1005425

### Reproducibility

* [Björn Grüning](/src/people/bjoern-gruening/index.md), [John Chilton](/src/people/john-chilton/index.md), Johannes Köster, Ryan Dale, [Nicola Soranzo](http://biowiki.crs4.it/biowiki/NicolaSoranzo), [Marius van den Beek](http://www.ibps.upmc.fr/en/ibps/directory/1921-Marius-Van+Den+Beek), [Jeremy Goecks](/src/people/jeremy-goecks/index.md), Rolf Backofen, [Anton Nekrutenko](/src/people/anton/index.md), [James Taylor](/src/people/james-taylor/index.md).
**[Practical Computational Reproducibility in the Life Sciences](https://doi.org/10.1016/j.cels.2018.03.014)**, *Cell Systems*, Volume 6, Issue 6, 2018, Pages 631-635, ISSN 2405-4712, doi:10.1016/j.cels.2018.03.014.

### ToolShed

* [Daniel Blankenberg](/src/people/dan/index.md), [Gregory Von Kuster](/src/people/greg_vonkuster/index.md), [Emil Bouvier](/src/people/dave-bouvier/index.md), [Dannon Baker](/src/people/dannon-baker/index.md), [Enis Afgan](/src/people/enis-afgan/index.md), [Nicholas Stoler](http://nstoler.com/), the [Galaxy Team](/src/galaxy-team/index.md), [James Taylor](/src/people/james-taylor/index.md) and [Anton Nekrutenko](/src/people/anton/index.md). **[Dissemination of scientific software with Galaxy ToolShed](http://genomebiology.biomedcentral.com/articles/10.1186/gb4161)**. *Genome Biology* (2014) 15:403 doi:10.1186/gb4161

### Training

* [Bérénice Batut](http://bebatut.fr/), Saskia Hiltemann, Andrea Bagnacani, [Dannon Baker](/src/people/dannon-baker/index.md), Vivek Bhardwaj, Clemens Blank, Anthony Bretaudeau, Loraine Brillet-Guéguen, [Martin Čech](/src/people/marten/index.md), [John Chilton](/src/people/john-chilton/index.md), [Dave Clements](/src/people/dave-clements/index.md), Olivia Doppelt-Azeroual, Anika Erxleben, Mallory Ann Freeberg, Simon Gladman, Youri Hoogstrate,  [Hans-Rudolf Hotz](/src/people/hansrudolf-hotz/index.md), Torsten Houwaart, Pratik Jagtap, [Delphine Lariviere](/src/people/delphine-lariviere/index.md), Gildas Le Corguillé, Thomas Manke, Fabien Mareuil, Fidel Ramírez, Devon, Ryan, Florian Christoph Sigloch, [Nicola Soranzo](http://biowiki.crs4.it/biowiki/NicolaSoranzo), Joachim Wolff, Pavankumar Videm, Markus Wolfien, Aisanjiang Wubuli, Dilmurat Yusuf, Galaxy Training Network, [James Taylor](/src/people/james-taylor/index.md), Rolf Backofen, [Anton Nekrutenko](/src/people/anton/index.md), [Björn Grüning](/src/people/bjoern-gruening/index.md). **[Community-Driven Data Analysis Training for Biology](https://doi.org/10.1016/j.cels.2018.05.012)**, *Cell Systems*, Volume 6, Issue 6, 27 June 2018, Pages 752-758.e1

## Galaxy Publication Library

This page highlights only a few Galaxy related publications.  However, *the set of relevant publications is orders of magnitude larger.*  The [Galaxy Group](https://www.zotero.org/groups/galaxy) on [Zotero](https://zotero.org/) lists published articles, conference proceedings, theses, book chapters and books that use, extend, reference or implement Galaxy in any way.  The library contains thousands of publications all classified with ~19 Galaxy specific tags.  See the [Galaxy Publication Library page](/src/publication-library/index.md) for more.

See the [Citations section](/src/galaxy-project/statistics/index.md#publications--citations) of the [project statistics page](/src/galaxy-project/statistics/index.md) for a summary of citations of project papers.

