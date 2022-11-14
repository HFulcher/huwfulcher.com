---
description: A note in Huw's knowledge base
---

Back: [[intellij]]

# Problem
Sometimes you can end up in a situation where IntelliJ asks for a JDK version that does not exist. This is due to one of two things:

1. An outdated pom.xml file
2. An outdated .idea folder

# Resolution
## pom.xml file
Ensure that the `<configuration>` tag has the correct release.

```java
<build>
	<plugins>
		<plugin>
			<groupId>org.apache.maven.plugins</groupId>
			<artifactId>maven-compiler-plugin</artifactId>
			<version>3.8.1</version>
			<configuration>
				<release>11</release>
			</configuration>
		</plugin>
	</plugins>
</build>
```

Also ensure that the plugins added to the `pom.xml` have the right version for the JDK version being used.

**Don't forget to right click the `pom.xml` file and get Maven to rebuild the project!**


## Outdated .idea folder
The `.idea` folder in an IntelliJ project contains information that helps InteliiJ configure itself correctly for running Java projects. In circumstances where you are bringing in an IntelliJ project to a new system, the `.idea` folder may be out of sync with the system and `pom.xml` file.

The easiest resolution is to delete the `.idea` folder and let IntelliJ rebuild it from scratch.