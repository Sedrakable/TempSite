import React from "react";
import styles from "./ServicesGrid.module.scss";
import FlexDiv from "../../../reuse/FlexDiv";
import { IService, LocalPaths } from "../../../../data.d";
import { Paragraph } from "../../../reuse/Paragraph";
import { Heading } from "../../../reuse/Heading";
import { Button } from "../../../reuse/Button";
import { useAtom } from "jotai";
import { langData } from "../../../navbar/LangSwitcher/LangSwitcher";
import { getTranslations } from "../../../../helpers/langUtils";

export const ServicesGrid: React.FC<{ services: IService[] }> = ({
  services,
}) => {
  const [lang] = useAtom(langData);
  const translations = getTranslations(lang);

  const renderCheckmark = (service: any, feature: string) => {
    return service.features.features.some((f: any) => f.title === feature) ? (
      <Heading as="h5" level="5" font="Cursive" color="yellow">
        &#10003;
      </Heading>
    ) : (
      <Heading as="h5" level="5" font="Cursive" color="grey">
        &#10007;
      </Heading>
    );
  };

  const allFeatures: string[] = Array.from(
    new Set(
      services
        ?.map((service: any) =>
          service.features.features?.map((feature: any) => feature.title)
        )
        .flat()
    )
  );

  return (
    <FlexDiv width100 className={styles.container}>
      <div className={styles.scrollWrapper}>
        <table>
          <thead>
            <tr>
              <th className={styles.mainColumn}></th>
              {services?.map((service) => {
                return (
                  <th key={service.title}>
                    <Heading
                      level="5"
                      color="white"
                      as="h6"
                      font="Seto"
                      paddingBottomArray={[2]}
                    >
                      {service.title}
                    </Heading>
                    {service?.price && (
                      <FlexDiv
                        className={styles.priceWrapper}
                        padding={{ top: [1, 1, 1, 2], horizontal: [3] }}
                      >
                        <Paragraph
                          level="regular"
                          color="yellow"
                          weight="regular"
                        >
                          {translations.other.startAt +
                            " " +
                            service?.price +
                            "CAD"}
                        </Paragraph>
                      </FlexDiv>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {allFeatures?.map((feature: string) => {
              return (
                <tr key={feature}>
                  <td className={styles.mainColumn}>
                    <Paragraph level="small" color="black" weight="regular">
                      {feature}
                    </Paragraph>
                  </td>
                  {services?.map((service) => (
                    <td key={service.title}>
                      {renderCheckmark(service, feature)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className={styles.mainColumn}></td>
              {services?.map((service) => (
                <td key={service.path}>
                  <Button
                    variant="secondary"
                    fit="grow"
                    path={`/${lang}${LocalPaths.SERVICE}${service.path}`}
                  >
                    {translations.buttons.view}
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </FlexDiv>
  );
};
